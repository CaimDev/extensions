import { uniq } from 'lodash';

const BACKEND_URL = 'https://staging.ctffns.net/image-tagging';

export const requestTags = async (imageUrl) => {
  const response = await fetch(`${BACKEND_URL}/tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: imageUrl
    }),
  });

  if (response.ok) {
    const body = await response.json();
    return body.tags
  } else {
    throw new Error('Failed to load tags for image')
  }
};

export const mergeTags = (oldTags, newTags) =>
  uniq((oldTags).concat(newTags)).sort();
