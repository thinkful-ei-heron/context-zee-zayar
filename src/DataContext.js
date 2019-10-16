import React from 'react'

const DataContext = React.createContext({
  notes: [],
  folders: []
}
)

export default DataContext;