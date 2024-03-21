import { Card, ListItem, LoadMoreButton, Wrapper } from "./CatalogPage.styled";

export default function CatalogPage() {
  return (
    <Wrapper>
      <div>
        <h2>Location</h2>
        <h2>Filter</h2>
        <h3>Vehicle equipment</h3>
        <ul>
          <li>AC</li>
          <li>Auiomatic</li>
          <li>Kitchen</li>
          <li>TV</li>
          <li>Shower/WC</li>
        </ul>
        <h3>Vehicle type</h3>
        <ul>
          <li>Van</li>
          <li>Fully</li>
          <li>Alcove</li>
        </ul>
        <button>Search</button>
      </div>
      <div>
        <ul>
          <ListItem><Card></Card></ListItem>
          <ListItem><Card></Card></ListItem>
          <ListItem><Card></Card></ListItem>
          <ListItem><Card></Card></ListItem>
        </ul>
        <LoadMoreButton>Load More</LoadMoreButton>
      </div>
    </Wrapper>
  );
}