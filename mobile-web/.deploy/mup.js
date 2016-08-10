module.exports = {
  servers: {
    one: {
      host: '128.199.102.116',
      username: 'root',
      pem: "~/.ssh/id_rsa"
    }
  },

  meteor: {
    name: 'mobileweb',
    path: '/Users/leijing/Data/mr_edu/demos/mobile-web',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
      debug: true,
    },
    env: {
      ROOT_URL: 'http://128.199.102.116',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
