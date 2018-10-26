import React from "react"

import RandomRecipesList from "./RandomRecipesList"
import RecipesTable from "./RecipesTable"
import * as DataSource from "services/recipes/mock"

export default class RecipesContainer extends React.Component {
  componentDidMount() {
    console.warn("RecipesContainer mounted")
  }

  componentWillUnmount() {
    console.warn("RecipesContainer will unmount")
  }

  render() {
    return (
      <div className="wrapper">
        <RandomRecipesList randomRecipes={DataSource.getNRandom(3)} />
        <RecipesTable recipesList={DataSource.recipesList} />
      </div>
    )
  }
}