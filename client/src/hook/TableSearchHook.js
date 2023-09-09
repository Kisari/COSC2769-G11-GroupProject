import { useState, useEffect } from "react";

//warning : DONT TRY TO UNDERSTAND THIS

export const useTableSearch = ({ searchVal, data, sortOption }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);

  useEffect(() => {
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
    if (sortOption.option !== 0) {
      const value = sortOption.option;
      if (value === 1) {
        setFilteredData((prev) =>
          prev.sort((a, b) => (a?.name > b?.name ? 1 : -1))
        );
      }
      if (value === 2) {
        setFilteredData((prev) =>
          prev.sort((a, b) => (a?.price > b?.price ? 1 : -1))
        );
      } else {
        setFilteredData((prev) =>
          prev.sort((a, b) => (a?.dateAdded > b?.dateAdded ? 1 : -1))
        );
      }
    }
    if (sortOption.asc === true) {
      setFilteredData((prev) => prev.reverse());
    }
  }, [searchVal, origData, searchIndex, sortOption]);

  return { filteredData };
};
