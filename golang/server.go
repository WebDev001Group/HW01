package main

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis"
)

var client *redis.Client

func NewSHA256(data []byte) string {
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:])
}
func getSha(c *gin.Context) {
	sha := c.Query("sha256d") // shortcut for c.Request.URL.Query().Get("lastname")
	fmt.Println("sha: ", sha)
	val, err := client.Get(sha).Result()
	if err != nil {
		sha = "error in saving to redis"
		c.String(http.StatusBadGateway, "%s", sha)
		fmt.Println("error: ", err)
		return
	}
	c.JSON(200, gin.H{
		"string": val,
	})
}

func postSha(c *gin.Context) {
	body := Body{}
	// using BindJson method to serialize body with struct
	if err := c.BindJSON(&body); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}
	fmt.Println(body)
	if len(body.String) < 8 {
		val := "length is less than 8 characters"
		c.JSON(200, gin.H{
			"string": val,
		})
		return
	}
	val := NewSHA256([]byte(body.String))

	err := client.Set(val, body.String, 0).Err()
	if err != nil {
		fmt.Println("error: ", err)
		c.String(http.StatusBadGateway, "%s", err)
		return
	}

	c.JSON(200, gin.H{
		"string": val,
	})

}

type Body struct {
	// json tag to serialize json body
	String string `json:"string"`
}

func main() {
	client = redis.NewClient(&redis.Options{
		//Addr:     "0.0.0.0:6379",
		Addr:   "redis:6379",
		Password: "",
		DB:       0,
	})
	r := gin.Default()
	r.GET("/go/sha256", getSha)
	r.POST("/go/sha256", postSha)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}
