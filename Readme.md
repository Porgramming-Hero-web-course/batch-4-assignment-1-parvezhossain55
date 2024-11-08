The significance of union and intersection types in Typescript.

Union : 
it's similer to or type in javscript 
if you we have any use case that we need a type or B type then we need to use this union type 
here is an example 


type unionType = string | number

Why shuould we use it ?
case of safe : As we can use many type at once by useing type so type related problem can be reduce 
for flaxiable : we can make complex type by using this union type esasyliy

Intersection  : 
Intersection  is similer to && in javascript . it means we goona have all types 
this thing is usefull when we have to deal with multiple types

Type IntersectionType = string & number 

why should we use it ?
Combining Types: when we need all type we have to use it 
type check : by this type typescript ensure we have all type we reqired
obeject use : something we need more than one type for an single object . supose we have a person who is a student and also a job holder . in this case we can combine it in one 


at last we can say union type is reqired if we want one of many and the Intersection is reqired if we need all type for using case 