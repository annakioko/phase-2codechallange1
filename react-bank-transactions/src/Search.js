import { useState } from "react";


const searchTab = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // the .tolowercase makes the search case insensitive
  const data = {
    transactions: transactions.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  return (
    <>
      <label htmlFor="search">
        Search by Task:nbsp;
        <input id="search" type="text" value={search} onChange={handleSearch} />
      </label>
      <br />

      <Table data={data}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>DATE</HeaderCell>
                <HeaderCell>DISCRIPTION</HeaderCell>
                <HeaderCell>CATEGORY</HeaderCell>
                <HeaderCell>AMOUNT</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>
                    {item.deadline.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Cell>
                  <Cell>{item.description}</Cell>
                  <Cell>{item.category}</Cell>
                  <Cell>{item.amount}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
};

export default Search;
