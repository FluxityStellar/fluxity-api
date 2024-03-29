import log from '../logger';
import streamUp from './remove_duplicate_stream';

const migrate = async () => {
  try {
    await streamUp();
  } catch (error) {
    log.error({ message: 'Migration failed:', error });
  }
};

export default migrate;
