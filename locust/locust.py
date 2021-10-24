from locust import *

class Client(HttpUser):
    
    @task
    def getHashNode(self):
        self.client.post("/node/sha256",json={"string":"amirhss1234"})

    @task
    def sendHashNode(self):
        self.client.get("/node/sha256?sha256d=549394baaa3c25beeb27f8ef1e1f6b2177d00941b72ab762e06a6a0c3f06c2ea")

    @task
    def getHashGo(self):
        self.client.post("/go/sha256",json={"string":"alirezaeiji536"})
    
    @task
    def sendHashGo(self):
        self.client.get("/go/sha256?sha256d=549394baaa3c25beeb27f8ef1e1f6b2177d00941b72ab762e06a6a0c3f06c2ea")