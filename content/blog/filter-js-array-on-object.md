---
path: /
date: 2020-05-21T17:00:00.000Z
title: Filter JS Array on Object
description: "How to use the whole object itself to filter a javascript array of objects."
---

<!--StartFragment-->

Unfortunately javascript array filter does not support filtering against a whole item. 
The reason for this is because javascript uses type coercion when comparing values. 
If you ran 
```js
console.log( {id: 1} === {id: 1} );
```

the output would be 
```terminal
false
```
so this method will not work.

The code below is one way I've found to compare objects. 
The idea is to convert them to strings first then compare them which should yield the results I'm looking for.

```js
const list = [
    { id: 1, name: 'john' },
    { id: 2, name: 'jane' },
];

const picked = [
    { id: 2, name: 'jane' },
];

const found = list.filter((item) => {
    const strItem = JSON.stringify(item);
    const listOfFound = picked.map((pick) => {
        const strPicked = JSON.stringify(pick);

        // here we now compare the two stringified objects
        if (strItem === strPicked) {
            return item;
        }
    });

    // map will return an array which should only hold one item 
    // assuming your initial list has no duplicates so we take the item at index 0
    return listOfFound[0];
});

console.log(found);
```

If you were to run the above code, it should output the following.

```terminal
[ { id: 2, name: 'jane' } ]
```

Off the bat I'm not a fan of nesting array methods. I haven't really done testing but this solution seems like it could be heavy in some situations. 
That being said I still think it's a neat little workaround when in a pinch.

<!--EndFragment-->