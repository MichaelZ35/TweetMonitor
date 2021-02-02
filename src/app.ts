import Monitor from "./Monitor.js"
import TwitterListener from "./TwitterListener.js"

class app {
    monitor: Monitor
    listener: TwitterListener

    constructor() {
        this.monitor = new Monitor()
        this.listener = new TwitterListener(this.monitor)
    }

    run() {
        this.listener.listen()
        console.log('Listening for tweets...')

        setInterval(() => {
            const topFive = this.monitor.getTop5Hashtags()
            console.log(`Tweets Processed: ${this.monitor.tweetCount()}`)
            topFive.forEach((obj, index) => {
                console.log(`#${index + 1}: Count: ${obj[1].toString().padStart(4)} Tag: ${obj[0]}`)
            })
            console.log('\n')
        }, 5000)
    }
}

const myApp = new app()

myApp.run()