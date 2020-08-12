---
path: /
date: 2020-05-21T17:00:00.000Z
title: Filter Arrays Using the Full Object
description: How you can use the whole object itself to filter an objects array.
---
![Photo by Maurício Mascaro](assets/pexels-maurício-mascaro-712786.jpg "camera-filter")

<!--StartFragment-->

Taking a quick stab at this you might think to yourself, shouldn't I just be able to run `[{ a:2 }, { a:3 }].filter(o => o.a === 3)` and get the object(s) I'm looking for out of it?  I thought so too.

Unfortunately the array filter function doesn't work like that. Javascript uses type coercion when comparing values so if you were to run the following code 

```js
console.log( {id: 1} === {id: 1} );
```

the output would be 

```terminal
false
```

So getting a little creative, I came up with the code below which is one way I've found to compare objects. The idea is to convert them to strings first then compare them which should yield the results I'm looking for.

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
    const filter = picked.map((pick) => JSON.stringify(pick));

    // if the item is part of the filter list, 
    // will return true to include it as part of the found items
    return filter.includes(strItem);
});

console.log(found);
```

If you were to run the above code, it should output the following.

```terminal
[ { id: 2, name: 'jane' } ]
```

Disclaimer: I'm really not a fan of nesting array methods as this is not the most maintainable nor scalable solution and I also haven't really done much testing. 

With that being said I still think it's a neat little workaround when in a pinch and as long as code is relatively light...until I find a better solution.

Peace!!

<!--EndFragment-->