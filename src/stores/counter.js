import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('newsApp' , {
  state : () => ({
    readingList : [],
    id: 0
  }),
  actions: {
    addArticle(item) {
      let listCheck = this.readingList.some((article) => {
        return article.item.title === item.title;
      })
      if(!listCheck){
        this.readingList.push({item, id: this.id++, read : false})
      }
    },
    deleteArticle(itemId) {
      this.readingList = this.readingList.filter((el) => {
        return el.id !== itemId
      })
    },
  }
})
