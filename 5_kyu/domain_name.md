## Extract the domain name from a URL

- Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 
```python
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
```

Solution:

```python
def domain_name(url):
    for s in url.split('/'):
        if s.find(".") > 0:
            return s.split('.')[1] if s.split('.')[0] =='www' else s.split('.')[0] 

print(domain_name("http://google.com")) # google
print(domain_name("www.xakep.ru")) # xakep
print(domain_name("https://youtube.com")) # youtube
```