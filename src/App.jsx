import './App.css'
import Button from "./components/Button.jsx";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx"


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
       <nav>
           <Button
               buttonType="button"
               buttonText="to the collection"
               clickHandler={() => console.log("to the collection")}
           />
           <Button
               buttonType="button"
               buttonText="shop all bags"
               clickHandler={() => console.log("shop all bags")}
           />
           <Button
               buttonType="button"
               buttonText="pre-orders"
               disabledButton={true}
           />

         {/* <button type="button" onClick={() => console.log("to the collection")}>to the collection</button>
           <button type="button" onClick={() => console.log("shop all bags")}>shop all bags</button>
           <button type="button" disabled >pre-orders</button>*/}
       </nav>
          <main>
{/*              <article>
                  <span>Best Seller</span>
                  <div>
                  <img src={bag_1} alt="tas 1"/>
                  </div>
                 <p>The handy bag</p>
                  <h4>€400</h4>
              </article>
              <article>
                  <span>Best Seller</span>
                  <div>
                      <img src={bag_2} alt="tas 2"/>
                  </div>
                  <p>The stylish bag</p>
                  <h4>€250</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <div>
                      <img src={bag_3} alt="tas 3"/>
                  </div>
                  <p>The simple bag</p>
                  <h4>€300</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <div>
                      <img src={bag_4} alt="tas 4"/>
                  </div>
                  <p>The trendy bag</p>
                  <h4>€150</h4>
              </article>       */}

              <Product
              title="Best Seller"
              image={bag_1}
              type="The handy bag"
              price="€400"
              />

              <Product
                  title="Best Seller"
                  image={bag_2}
                  type="The stylish bag"
                  price="€250"
              />

              <Product
                  title="New collection"
                  image={bag_3}
                  type="The simple bag"
                  price="€300"
              />

              <Product
                  title="New collection"
                  image={bag_4}
                  type="The trendy bag"
                  price="€150"
              />
          </main>

          <footer>

              <Tile>
                  <h2>The Brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto atque, aut cupiditate dolore dolores est, incidunt iste laudantium maiores modi nostrum praesentium quibusdam similique tempore ullam ut voluptatum.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, minus, sit! Aperiam cum delectus eaque earum maxime minima perferendis quae repellendus! Autem beatae dolores eaque eos neque rem ullam, voluptatibus!
                  </p>
              </Tile>
              <Tile>
                  <div>
                      <img src={brand} alt="merk"/>
                  </div>
              </Tile>
              <Tile>
                  <div>
                      <img src={our_story} alt="ons verhaal"/>
                  </div>
              </Tile>
              <Tile>
                  <h2>Our Story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto atque, aut cupiditate dolore dolores est, incidunt iste laudantium maiores modi nostrum praesentium quibusdam similique tempore ullam ut voluptatum.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, minus, sit! Aperiam cum delectus eaque earum maxime minima perferendis quae repellendus! Autem beatae dolores eaque eos neque rem ullam, voluptatibus!
                  </p>
              </Tile>

          </footer>

          </>
  )
}

export default App
