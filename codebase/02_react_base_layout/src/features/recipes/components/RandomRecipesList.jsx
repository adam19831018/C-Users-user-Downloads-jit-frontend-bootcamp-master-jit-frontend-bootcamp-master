import React from "react"

import RecipeCard from "./RecipeCard"

export default RandomRecipesList = (props) => {
  return (
    <fieldset className="row z-depth-1 yellow lighten-4">
      <h4>Random recipes</h4>
      <div className="row">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </fieldset>
  )
}