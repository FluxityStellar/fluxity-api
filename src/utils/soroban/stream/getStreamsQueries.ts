import { ParsedQs } from 'qs';

const getStreamsQueries = (params: ParsedQs) => {
  const { sender, receiver, token, address } = params;

  const query: Record<string, string | object> = {};

  if (token && typeof token === 'string') {
    query['token'] = token.toUpperCase();
  }

  if (address && typeof address === 'string') {
    query['$or'] = [{ receiver: address.toUpperCase() }, { sender: address.toUpperCase() }];
  } else {
    if (sender && typeof sender === 'string') {
      query['sender'] = sender.toUpperCase();
    }

    if (receiver && typeof receiver === 'string') {
      query['receiver'] = receiver.toUpperCase();
    }
  }

  return query;
};
export default getStreamsQueries;
