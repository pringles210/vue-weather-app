
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'weather',
  state: () => ({
    apiKey: process.env.API_KEY, 
    weatherData: null
  }),

  actions: {
      async getCurrentWeather(location) {
      const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}&aqi=yes`
      const response = await fetch(url)
      this.weatherData = response.json()
      console.log(this.weatherData)
      
    }
  }
})
