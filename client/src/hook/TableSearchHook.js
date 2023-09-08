import { useState, useEffect } from "react";

//warning : DONT TRY TO UNDERSTAND THIS

export const useTableSearch = ({ searchVal, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const crawl = (objectArray, allValues) => {
      if (!allValues) allValues = [];
      for (var key in objectArray) {
        if (typeof objectArray[key] === "object")
          crawl(objectArray[key], allValues);
        else allValues.push(objectArray[key] + " ");
      }
      return allValues;
    };
    const fetchData = () => {
      setOrigData(data);
      setFilteredData(data);
      const searchInd = data.map((item) => {
        const allValues = crawl(item);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
      if (data) setLoading(false);
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((stringObject, index) => {
        if (
          stringObject.allValues
            .toLowerCase()
            .indexOf(searchVal.toLowerCase()) >= 0
        ) {
          return origData[index];
        }
        return null;
      });
      setFilteredData(
        reqData.filter((object) => {
          if (object) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};
