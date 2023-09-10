function returnRecusiveData(data) {
  var newData = data?.map((item) => {
    return findTheChildOfItem(data, item);
  });
  return newData;
}

function findTheChildOfItem(data, item) {
  var theChild = data?.filter((elements) =>
    elements?.parents?.includes(item?._id)
  );

  if (theChild.length > 0) {
    var arrayOfChilds = [];
    theChild?.forEach((child, index) => {
      var subChild = findTheChildOfItem(data, child);
      arrayOfChilds.push(subChild);
    });
    return { ...item, child: arrayOfChilds };
  }
  return item;
}

export function addChildForRender(data) {
  return returnRecusiveData(data);
}
