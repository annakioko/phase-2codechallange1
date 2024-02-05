import React from "react";
import { useState } from "react";

const Add = () => {
  const [data, setData] = React.useState({ data});
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const id = Math.floor(Math.random() * (9990 - 0 + 1)) + 0;

    setData((state) => ({
      ...state,
      data: state.data.concat({
        id,
        date: new Date(),
        description: "paycheck from work",
        category: "Income",
        amount: 0.0,
      }),
    }));

    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>

      <Table data={data}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>DATE</HeaderCell>
                <HeaderCell>DESCRIPTION</HeaderCell>
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
                  <Cell>{item.category.toString()}</Cell>
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


export default AddButton;