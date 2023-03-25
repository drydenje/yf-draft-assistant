import FetchGraphQL from '@/services/Data/FetchGraphQL'

const Franchises = ({results}) => {
  console.log(results);

  return (
    <div>Franchises</div>
  )
}

export async function getStaticProps() {
  const franchiseQuery = `
  query {
    activeFranchises {
      franchID
      franchName
      active
      NAassoc
    }
  }
  `;

  const results = await FetchGraphQL(franchiseQuery);
  const r = results.data.activeFranchises;
  
  return {
    props: { results: r }
  }
}

export default Franchises;