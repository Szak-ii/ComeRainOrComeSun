class Fetch {
    async getCurrent(input) {
      const myKey = "2e116f055ef273972e81e0c8414e3037";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/weather?q=${input}&appid=${myKey}lat=30.489772&lon=-99.771335&units=metric`
      );
  
      const data = await response.json();

      
  
      console.log(data);
  
      return data;
    }
  }

  
  