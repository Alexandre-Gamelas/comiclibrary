import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Daily } from '../../components/organisms'

function DailyContainer() {
  const [character, setCharacter] = useState([])
  const [fetch, setFetch] = useState(true)

  useEffect(() => {
    const path = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=871a206577ce22e75964fba2c7a20ff1d1502020&format=json&field_list=name,id&filter=id:1443"
    axios.get(path)
      .then(function (response) {
        // handle success
        console.log("Daily Hero: ", response.data.results[0]);
        setCharacter(response.data.results[0])
      })
      .catch(function (error) {
        console.log("Erro Daily: ", error);
        setFetch(false)
      })
  }, [fetch])

  return (
    <Daily character={character} />
  )
}

export default DailyContainer
