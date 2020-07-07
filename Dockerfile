FROM golang:latest

ENV GIN_MODE=release
ENV PORT=3000
ENV VIRTUAL_HOST=siwiec.us
ENV LETSENCRYPT_HOST=siwiec.us
ADD . /go/

# Run the two commands below to install git and dependencies for the project. 
# RUN apk update && apk add --no-cache git
# RUN go get ./...
RUN go get -u github.com/gin-gonic/gin
RUN go get -u github.com/gin-contrib/static

EXPOSE $PORT

CMD ["go", "run", "server.go"]

