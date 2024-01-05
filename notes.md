# Runtime Results

### Going over the runtime results for every array size in each function, doubleAppend and doubleInsert. 

### For the Insert function, as the size of the arrays decreased, so did the time it took for the function to run through it.

### For the Append function, as the size of the arrays decreased, at first glance it looks like time also decreases but only to a certain point. Once the tinyArray was passed through the function, it actually took longer to run than the smallArray. The Insert function was now faster at running the small and tiny arrays.

### For small scale applications, the Insert function would scale much better than Append. But once you cross a certain threshold, the Append function will scale better at the large scale applications.