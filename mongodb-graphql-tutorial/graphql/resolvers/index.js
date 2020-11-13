// const Content = require('../../models/content');
const Channel = require('../../models/ytbChannel');
const { startSession } = require('mongoose');

const resolvers = {
  Query: {
    async ytbChannel(_, args) {
      try {
        const channels = await Channel.find()
        return channels
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  },
  Channel: {
    _id(_, args) {
      return _._id;
    },
    ytbProfile(_, args) {
      return _.ytbProfile;
    },
    ytbLinkAddress(_, args) {
      return _.ytbLinkAddress;
    },
    ytbSubscribe(_, args) {
      return _.ytbSubscribe;
    },
    ytbHits(_, args) {
      return _.ytbHits;
    },
    video(_, args) {
      return _.video;
    }
  },
  Mutation: {
    async createChannel(_, args) {
      try {
        const channel = new Channel({
          ...args.channelInput
        })
        const result = await channel.save();
        return result;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
module.exports = resolvers; 