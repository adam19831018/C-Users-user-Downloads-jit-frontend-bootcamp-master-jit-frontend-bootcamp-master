import React from "react"
import PropTypes from "prop-types"

export default class RecipesTableEntry extends React.PureComponent {
  render() {
    const { mealName, preparationTime, difficulty,
      onRecipeSelected } = this.props

    return (
      <tr>
        <td>
          <a href="#" onClick={onRecipeSelected}>
            {mealName}
          </a>
        </td>
        <td>
          {preparationTime}min
        </td>
        <td>
          {difficulty}
        </td>
      </tr>
    )
  }
}

RecipesTableEntry.propTypes = {
  mealName: PropTypes.string.isRequired,
  preparationTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  difficulty: PropTypes.oneOf(["Easy", "Intermediate", "Difficult"]).isRequired,
  onRecipeSelected: PropTypes.func.isRequired,
}
