import React from 'react'

/* ############################ */
/* ##### Remove Button ##### */
/* ############################ */

export default ({ 
  id,
  handleBuilding 
}) => (
  <button
    onClick={() => handleBuilding(id)}>
        Remove
  </button>
)