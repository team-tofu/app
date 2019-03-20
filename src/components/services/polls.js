export const postPoll = poll => {
  return fetch(`${process.env.API_URL}`, {
    method: 'POST',
    body: JSON.stringify(poll)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

