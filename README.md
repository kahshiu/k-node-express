A barebone expressjs backend application to test out CD on kubernetes

Available endpoints
- localhost:4000/
  welcome message
- localhost:4000/healthcheck
- localhost:4000/plain-text/{message}
  will print out message in plain text
- localhost:4000/json?test1=1&test2=2
  Will convert the query string into a json and return said json
