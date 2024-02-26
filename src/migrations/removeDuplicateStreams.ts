import Stream, { IStream } from '../models/Stream';

const removeDuplicateStreams = async (streams: IStream[]) => {
  const latestStream = streams.reduce((prev, curr) => {
    if (curr.updatedAt > prev.updatedAt) {
      return curr;
    }

    return prev;
  }, streams[0]);

  await Stream.deleteMany({ _id: { $ne: latestStream._id }, id: latestStream.id });
};

export default removeDuplicateStreams;
