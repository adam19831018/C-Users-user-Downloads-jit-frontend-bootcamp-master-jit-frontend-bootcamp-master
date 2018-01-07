import React from "react"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"
import * as DataSource from "../RecipesStore"

export default function RecipesContainer() {
  return (
    <div className="wrapper">
      <RandomRecipesList randomRecipes={DataSource.getNRandom(3)}/>
      <RecipesTable recipesList={DataSource.recipesList}/>
    </div>
  )
}