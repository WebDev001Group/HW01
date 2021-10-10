package main

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/go-redis/redis"
)

var client *redis.Client

func NewSHA256(data []byte) string {
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:])
}
func handleSHA(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/sha256" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
	type Message struct {
		Sha string
	}
	decoder := json.NewDecoder(r.Body)

	var t Message

	err := decoder.Decode(&t)
	if err != nil {
		println("panic")
	}
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "POST" {
		//save sha256 in database
		if len(t.Sha) < 8 {
			t.Sha = "length is less than 8 characters"
			json.NewEncoder(w).Encode(t)
			return
		}
		value := t.Sha
		t.Sha = NewSHA256([]byte(t.Sha))

		err = client.Set(t.Sha, value, 0).Err()
		if err != nil {
			t.Sha = "error in saving to redis"
			fmt.Println(err)
		}
		json.NewEncoder(w).Encode(t)

	} else if r.Method == "GET" {

		val, err := client.Get(t.Sha).Result()
		if err != nil {
			t.Sha = "error in saving to redis"
			fmt.Println(err)
			json.NewEncoder(w).Encode(t)
			return
		}
		t.Sha = val
		json.NewEncoder(w).Encode(t)

	}

}

func main() {
	client = redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "",
		DB:       0,
	})
	http.HandleFunc("/sha256", handleSHA)
	fmt.Printf("Starting server at port 8080\n")
	var port = fmt.Sprintf("localhost:%d", 8080)
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal(err)
	}

}
