## Extract the domain name from a URL

- Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

Examples:

```js
url = "http://github.com/carbonfive/raygun" -> domain name = "github"
url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
url = "https://www.cnet.com"                -> domain name = "cnet"
```

Solution 1:

```python
function domainName(url){ 
     url = url.replace("http://", "")
     url = url.replace("https://", "")
     url = url.replace("www.", "")
    
    return url.split('.')[0]
}
```
Solution 2:

```python
function domainName(url){
    let dm = ""
    if((url.search("www")) != -1){
        dm = url.slice(url.indexOf(".")+1,url.indexOf(".",url.indexOf(".")+1 ))
        return dm;
    }
    else if((url.search("//")) !=-1){
        dm = url.slice(url.indexOf("/")+2,url.indexOf(".", url.indexOf("/")+2 ))
        return dm;
    }
    else {
        dm = url.slice(0,url.indexOf("."))
        return dm;
    }
  }
```
