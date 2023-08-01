/*

import React, { useState, useEffect } from 'react';
import './Recipe.css'
function Recipe() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState(0);
  const[recipeType,setrecipeType]=useState("veg");
  const[Name,setname]=useState();

    
    const handleLikeClick=()=>{
      fetch('http://localhost:8000/recipies',
      {
          method :'PUT',
          headers:{'content-Type' : 'application/json'},
          body:JSON.stringify(data)
          
      })
      .then(res => res.json())
      .then (data => console.log(data))
      setLikes(likes+1)
    }


  useEffect(() => {
    fetch('http://localhost:8000/recipies')
      .then(response => response.json())
      .then(data => setData(data));
  
      
  }, []);
  
   const Data=data.filter((item)=>item.Name===Name);
   
   const filterData=data.filter((item)=>item.type===recipeType);
   
   

   
  return (
    <div className="recipe-container" >
   
       <form>
       <h2 className='mod0' style={{ color:"blue" }}><span style={{ color: "green" }}>W</span>hat's Cooking??</h2>
         <div className='find'> 
         <h2 className='mod0'>Find <span style={{ color: "yellow" }}>a</span> recipe</h2>
         <p className='mod0' style={{ fontStyle: "italic", marginTop: "-10px", fontSize: "17px" }}>
            Time to get into a yummiiiciouss world!!!
          </p>
      
        
        <div className="input-container">
  <input
    type="search"
    className='mod'
    placeholder='Search recipe here..... '
    value={Name}
    onChange={(e)=>setname(e.target.value)}
    autoFocus
  />
    <select
    id="foodpref"
    name="foodpref"
   
    value={recipeType}
    onChange={(e)=>setrecipeType(e.target.value)}
  >
    <option value="all">Select Preferences</option>
    <option value="veg">Veg</option>
    <option value="nonveg">Non-Veg</option>
    <option value="sweet">Sweet</option>
    <option value="juice">Beverages</option>
  </select>
</div>
      
       
        </div>
        
        <div className="note1">
    <span style={{ color: "red" }}>Note:</span> search the recipe by its Name to see the full details
  </div>
        
       </form>
         
      
        {
            Data.map(item =>(     
                                          
              <table key={item.id} style={{border:"1px,solid,white"}}>
            
               
                
                 
                 
                <tbody>
                 
                  <tr>
                    <td>Name:
                 </td>
                    
                  <td> {item.Name}</td>
                  </tr>
                  <tr>
                    <td>Item:</td>
                 <td>  <img src={item.url} alt={item.Name} /></td>
                  </tr>
                  <tr>
                <td>  Recipe By:</td>
                    <td>{item.Author}</td>
                    
                                   
                </tr>
                  <tr> 
                   <td> Description: </td>
                   <td> 
                   {item.Description}
                   </td>
                    
                  </tr>
                  <tr>
                  <td>Ingredients:</td>
                    <td>{item.Ingredients}</td>
                  </tr>
                  <tr>
                <td>  method:</td>
                    <td>{item.Method}</td>
                    
                                   
                </tr>
                  
                 
                </tbody>
    </table>


            ))


        }
     
    
     <div className="card-list"> 
     {filterData.map(item => (
       <div className="card" key={item.id}>
      
      <h2>{item.Name}</h2>
      <div className='image'>
     
         <img src={item.url} alt={item.Name} />
   
     </div>
     <div> 
      <h5>Recipe By:  <span style={{color:"red"}}>{item.Author}</span></h5>
     </div>
     <div>
     <details>
      <summary style={{color:'green',fontSize:"large",fontWeight:"bold"}}>
        Description: 
        </summary>
                  
     <p style={{color:"red"}}>{item.Description}</p>
     </details>
     
     </div>
        
         <div>
         <details>
           <summary style={{color:'green',fontSize:"large",fontWeight:"bold"}}>Ingredients: </summary>
              <p style={{color:"red"}}>{item.Ingredients}</p>
         </details>
          </div>
         <div>likes:
          {item.likes}
          </div>

         
   
     <button style={{color:"red"}} onClick={handleLikeClick}>
         Like  
     </button>  
       </div>

     ))}

     
   </div>
  
  
  </div>
    
  );
}

export default Recipe;
*/
/*
import React, { useState, useEffect } from 'react';
import './Recipe.css';

function Recipe() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState({});
  const [recipeType, setRecipeType] = useState("all");
  const [name, setName] = useState('');

  const handleLikeClick = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    fetch('http://localhost:8000/recipies')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLikes(data.reduce((likesObj, item) => {
          likesObj[item.id] = item.likes;
          return likesObj;
        }, {}));
      });
  }, []);

  const filteredDataByName = data.filter(item => item.Name.toLowerCase().includes(name.toLowerCase()));
  const recipesToDisplay = recipeType === "all" ? filteredDataByName : filteredDataByName.filter(item => item.type === recipeType);
  const filteredDataByType = recipeType === "all"
    ? data
    : data.filter(item => item.type === recipeType);

  return (
    <div className="recipe-container">
      <form className='fer'>
        <h2 className='mod0' style={{ color: "blue" }}><span style={{ color: "green" }}>W</span>hat's Cooking??</h2>
        <div className='find0'>
          <h2 className='mod0'>Find <span style={{ color: "yellow" }}>a</span> recipe</h2>
          <p className='mod0' style={{ fontStyle: "italic", marginTop: "-10px", fontSize: "17px" }}>
            Time to get into a yummiiiciouss world!!!
          </p>

          <div className="input-container">
            <input
              type="search"
              className='mod'
              placeholder='Search recipe here..... '
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <select
              id="foodpref"
              name="foodpref"
              value={recipeType}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="all">Select Preferences</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
              <option value="sweet">Sweet</option>
              <option value="juice">Beverages</option>
            </select>
          </div>
        </div>
      </form>

      <div className="note1">
        <span style={{ color: "red" }}>Note:</span> search the recipe by its Name to see the full details
      </div>

      

    
      <div className="card-list">
        {filteredDataByType.map(item => (
          <div className="card" key={item.id}>
            <h2 className="card__title">{item.Name}</h2>
            <div className='card__image'>
              <img src={item.url} alt={item.Name} />
            </div>
            <div className="card__author">
              <h5>Recipe By: <span style={{ color: "red" }}>{item.Author}</span></h5>
            </div>
            <div className="card__description">
              <details>
                <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Description:</summary>
                <p style={{ color: "red" }}>{item.Description}</p>
              </details>
            </div>
            <div className="card__ingredients">
              <details>
                <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Ingredients:</summary>
                <p style={{ color: "red" }}>{item.Ingredients}</p>
              </details>
            </div>
            <button className="card__like" onClick={() => handleLikeClick(item.id)}>
              Like <span>{likes[item.id] || 0}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
*/
/*
import React, { useState, useEffect } from 'react';
import './Recipe.css';

function Recipe() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState({});
  const [recipeType, setRecipeType] = useState("all");
  const [name, setName] = useState('');

  const handleLikeClick = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    fetch('http://localhost:8000/recipies')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLikes(data.reduce((likesObj, item) => {
          likesObj[item.id] = item.likes;
          return likesObj;
        }, {}));
      });
  }, []);

  const filteredDataByName = data.filter(item => item.Name.toLowerCase().includes(name.toLowerCase()));

  const recipesToDisplay = recipeType === "all" ? filteredDataByName : filteredDataByName.filter(item => item.type === recipeType);

  return (
    <div className="recipe-container">
      <form className='fer'>
      <h2 className='mod0' style={{ color: "blue" }}><span style={{ color: "green" }}>W</span>hat's Cooking??</h2>
        <div className='find0'>
          <h2 className='mod0'>Find <span style={{ color: "yellow" }}>a</span> recipe</h2>
          <p className='mod0' style={{ fontStyle: "italic", marginTop: "-10px", fontSize: "17px" }}>
            Time to get into a yummiiiciouss world!!!
          </p>

          <div className="input-container">
            <input
              type="search"
              className='mod'
              placeholder='Search recipe here..... '
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <select
              id="foodpref"
              name="foodpref"
              value={recipeType}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="all">Select Preferences</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
              <option value="sweet">Sweet</option>
              <option value="juice">Beverages</option>
            </select>
          </div>
        </div>
      </form>

      <div className="note1">
        <span style={{ color: "red" }}>Note:</span> search the recipe by its Name to see the full details
      </div>

     
      <div className="card-list">
        {recipesToDisplay.map(item => (
          <div className="card" key={item.id}>
            <h2 className="card__title">{item.Name}</h2>
            <div className='card__image'>
              <img src={item.url} alt={item.Name} />
            </div>
            <div className="card__author">
              <h5>Recipe By: <span style={{ color: "red" }}>{item.Author}</span></h5>
            </div>
            <div className="card__description">
              <details>
                <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Description:</summary>
                <p style={{ color: "red" }}>{item.Description}</p>
              </details>
            </div>
            <div className="card__ingredients">
              <details>
                <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Ingredients:</summary>
                <p style={{ color: "red" }}>{item.Ingredients}</p>
              </details>
            </div>
            <button className="card__like" onClick={() => handleLikeClick(item.id)}>
              Like <span>{likes[item.id] || 0}</span>
            </button>
          </div>
        ))}
      </div>
      
        <div className="no-results-message">No recipes found for the search query.</div>
      
    </div>
  );
}

export default Recipe;
*/
/*
import React, { useState, useEffect } from 'react';
import './Recipe.css';

function Recipe() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState({});
  const [recipeType, setRecipeType] = useState("all");
  const [name, setName] = useState('');

  const handleLikeClick = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    fetch('http://localhost:8000/recipies')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLikes(data.reduce((likesObj, item) => {
          likesObj[item.id] = item.likes;
          return likesObj;
        }, {}));
      });
  }, []);

  const filteredDataByName = data.filter(item => item.Name.toLowerCase().includes(name.toLowerCase()));

  const recipesToDisplay = recipeType === "all" ? filteredDataByName : filteredDataByName.filter(item => item.type === recipeType);

  return (
    <div className="recipe-container">
      <form className='fer'>
        <h2 className='mod0' style={{ color: "blue" }}><span style={{ color: "green" }}>W</span>hat's Cooking??</h2>
        <div className='find0'>
          <h2 className='mod0'>Find <span style={{ color: "yellow" }}>a</span> recipe</h2>
          <p className='mod0' style={{ fontStyle: "italic", marginTop: "-10px", fontSize: "17px" }}>
            Time to get into a yummiiiciouss world!!!
          </p>

          <div className="input-container">
            <input
              type="search"
              className='mod'
              placeholder='Search recipe here..... '
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <select
              id="foodpref"
              name="foodpref"
              value={recipeType}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="all">Select Preferences</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
              <option value="sweet">Sweet</option>
              <option value="juice">Beverages</option>
            </select>
          </div>
        </div>
      </form>

      <div className="note1">
        <span style={{ color: "red" }}>Note:</span> search the recipe by its Name to see the full details
      </div>

    
      {recipesToDisplay.length > 0 ? (
        <div className="card-list">
          {recipesToDisplay.map(item => (
            <div className="card" key={item.id}>
              <h2 className="card__title">{item.Name}</h2>
              <div className='card__image'>
                <img src={item.url} alt={item.Name} />
              </div>
              <div className="card__author">
                <h5>Recipe By: <span style={{ color: "red" }}>{item.Author}</span></h5>
              </div>
              <div className="card__description">
                <details>
                  <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Description:</summary>
                  <p style={{ color: "red" }}>{item.Description}</p>
                </details>
              </div>
              <div className="card__ingredients">
                <details>
                  <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Ingredients:</summary>
                  <p style={{ color: "red" }}>{item.Ingredients}</p>
                </details>
              </div>
              <button className="card__like" onClick={() => handleLikeClick(item.id)}>
                Like <span>{likes[item.id] || 0}</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results-message">No recipes found for the search query.</div>
      )}
    </div>
  );
}

export default Recipe;*/
import React, { useState, useEffect } from 'react';
import './Recipe.css';

function Recipe() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState({});
  const [recipeType, setRecipeType] = useState("all");
  const [name, setName] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  const handleLikeClick = (id) => {
    // Check if the user has already liked this recipe
    const likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];
    if (!likedRecipes.includes(id)) {
      // If the user hasn't liked this recipe, update the likes state and add the recipe to the likedRecipes in localStorage
      setLikes(prevLikes => ({
        ...prevLikes,
        [id]: (prevLikes[id] || 0) + 1,
      }));
      localStorage.setItem('likedRecipes', JSON.stringify([...likedRecipes, id]));
    }
  };

  const handleCommentSubmit = (id) => {
    if (newComment.trim() !== '') {
      setComments(prevComments => ({
        ...prevComments,
        [id]: [...(prevComments[id] || []), newComment],
      }));
      setNewComment('');
    }
  };

 useEffect(() => {
    // Function to fetch the recipes data from the server
    const fetchRecipes = () => {
      fetch('http://localhost:8000/recipies')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLikes(data.reduce((likesObj, item) => {
            likesObj[item.id] = item.likes;
            return likesObj;
          }, {}));
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    };

    // Fetch recipes data when the component mounts and after creating a new recipe
    fetchRecipes();
  }, []);

  
  const filteredDataByName = data.filter(item => item.Name && item.Name.toLowerCase().includes(name.toLowerCase()));


  const recipesToDisplay = recipeType === "all" ? filteredDataByName : filteredDataByName.filter(item => item.type === recipeType);

  return (
    <div className="recipe-container">
      <form className='fer'>
      <h2 className='mod0' style={{ color: "blue" }}><span style={{ color: "green" }}>W</span>hat's Cooking??</h2>
        <div className='find0'>
          <h2 className='mod0'>Find <span style={{ color: "yellow" }}>a</span> recipe</h2>
          <p className='mod0' style={{ fontStyle: "italic", marginTop: "-10px", fontSize: "17px" }}>
            Time to get into a yummiiiciouss world!!!
          </p>

          <div className="input-container">
            <input
              type="search"
              className='mod'
              placeholder='Search recipe here..... '
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <select
              id="foodpref"
              name="foodpref"
              value={recipeType}
              onChange={(e) => setRecipeType(e.target.value)}
            >
              <option value="all">Select Preferences</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
              <option value="sweet">Sweet</option>
              <option value="juice">Beverages</option>
            </select>
          </div>
        </div>
      </form>

      <div className="note1">
        <span style={{ color: "red" }}>Note:</span> search the recipe by its Name to see the full details
      </div>

      {/* Display recipes based on search and dropdown selection */}
      {recipesToDisplay.length > 0 ? (
        <div className="card-list">
          {recipesToDisplay.map(item => (
            <div className="card" key={item.id}>
              <h2 className="card__title">{item.Name}</h2>
              <div className='card__image'>
                <img src={item.url} alt={item.Name} />
              </div>
              <div className="card__author">
                <h5>Recipe By: <span style={{ color: "red" }}>{item.Author}</span></h5>
              </div>
              <div className="card__description">
                <details>
                  <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Description:</summary>
                  <p style={{ color: "red" }}>{item.Description}</p>
                </details>
              </div>
              <div className="card__ingredients">
                <details>
                  <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Ingredients:</summary>
                  <p style={{ color: "red" }}>{item.Ingredients}</p>
                </details>
              </div>
              <div className="card__ingreedients">
                <details>
                  <summary style={{ color: 'green', fontSize: "large", fontWeight: "bold" }}>Method:</summary>
                  <p style={{ color: "red" }}>{item.Method}</p>
                </details>
              </div>


              <button className="card__like" onClick={() => handleLikeClick(item.id)}>
                Like <span>{likes[item.id] || 0}</span>
              </button>
              
              {/* Comment form */}
              <form className="comment-form" onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(item.id) }}>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button type="submit">Submit</button>
              </form>

              {/* Display comments */}
              <div className="comments">
                {comments[item.id] && comments[item.id].map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results-message">No recipes found for the search query.</div>
      )}
    </div>
  );
}

export default Recipe;

