FROM golang:alpine as builder

WORKDIR $GOPATH/src/fullcycle

COPY . .

RUN go get -d -v

RUN go build -o /go/bin/hello

FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

ENTRYPOINT ["/go/bin/hello"]