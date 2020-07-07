package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/static"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("/go", true)))
	r.Run(":3000")

}
