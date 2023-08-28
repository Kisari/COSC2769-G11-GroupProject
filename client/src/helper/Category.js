function returnRecusiveData(data) {
  var newData = data?.map((item) => {
    return findTheChildOfItem(data, item);
  });
  return newData;
}

function findTheChildOfItem(data, item) {
  var theChild = data?.filter((elements) => elements?.parent === item?.id);
  if (theChild.length > 0) {
    return { ...item, child: findTheChildOfItem(data, theChild[0]) };
  }
  return item;
}

export function addChildForRender(data) {
  return returnRecusiveData(data);
}
