const FetchGraphQL = async (query, host = process.env.GRAPHQL_BASEBALL) => {
  // console.log(typeof query);
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  };

  const results = await fetch(host, opts)
    .then((res) => res.json())
    .catch(console.error);
  return results;
};

export default FetchGraphQL;
