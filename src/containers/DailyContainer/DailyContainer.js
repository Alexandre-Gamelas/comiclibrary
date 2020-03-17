import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Daily } from '../../components/organisms'

function DailyContainer() {
  const [character, setCharacter] = useState(false)
  const [fetch, setFetch] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const path = "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=871a206577ce22e75964fba2c7a20ff1d1502020&format=json&field_list=name,id,image,count_of_issue_appearances,deck,origin,birth&filter=id:1443"
    setLoading(true)
    axios.get(path)
      .then(function (response) {
        // handle success
        console.log("Daily Hero: ", response.data.results[0]);
        setCharacter(response.data.results[0])
        setLoading(false)
      })
      .catch(function (error) {
        console.log("Erro Daily: ", error);
        setFetch(false)
        setLoading(false)
      })
  }, [fetch])

  return (
    <Daily character={character} loading={loading} />
  )
}

export default DailyContainer
