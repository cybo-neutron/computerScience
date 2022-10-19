## [Youtube link](https://www.youtube.com/watch?v=Ntraj80qN2k)

## Single-Responsibility Principle

"The single responsibility principle states that every module or class
should have responsibility over d single part of the functionality
provided by the software, and that responsibility should be entirely
encapsulated by the class, module or function. All its services should be
narrowly aligned with that responsibility. "
(Wikipedia)

This principle has been distorted to 
"Everyting should do just one thing. "
(Common knowledge?)

"Orthogonality: ... We want to design components that are self-
contained: independent, and with a single, well-defined purpose ([...]
cohesion). When components are isblated from one another, you know
that you can change one without having to worry about the rest. "
(Andrew Hunt, David Thomas, The Pragmatic Programmer)


"Cohesion is a measure of the strength of association of the elements
inside a module. A highly cohesive module is a collection of statements
and data items that should be treated as a whole because they are so
closely related. Any attempt to divide them up would only result in
increased coupling and decreased readability. "
(Tom DeMarco, Structured Analysis and System Specification)



"A class should have only one reason to change. "
(Robert C. Martin, Agile Software Development)


Guideline: Prefer cohesive software entities. Everything that does not
strictly belong together, should be separated.


## Open-Closed Principle

"Software artifacts (classes, modules, functions, etc.) should be open
for extension, but closed for modification. "
(Bertrand Meyer, Object-Oriented Software Construction)

"This kind of type-based programming has a long history in C, and one of
the things we know about it is that it yields programs that are
essentially unmaintainable. "
(Scott Meyers, More Effective C++)

 Guideline: Prefer software design that allows the addition of types or
operations without the need to modify existing code.

## Liskov Substitution Principle

"What is wanted here is something like the following substitution
property: If for each object 01 of type S there is an object 02 of type T
such that for all programs P defined in terms of T, the behavior of P is
unchanged when o, is substituted for 02 then S is a subtype of T. "
(Barbara Liskov, Data Abstraction and Hierarchy)

Or simplified form:
"Subtypes must be substitutable for their base types. "


Behavioral subtyping (aka "IS-A" relationship)
• Contravariance of method arguments in a subtype
• Covariance of return types in a subtype
• Preconditions cannot be strengthene< in a subtype
• Postconditions cannot be weakened in a subtype
• Invariants of the super type must be preserved in a subtype



Guideline: Make sure that inheritance is about behavior, not about data.
Guideline: Make sure that the contract of base types is adhered to.
Guideline: Make sure to adhere to the required concept.

## Interface Segregation Principle

"Clients should not be forced to depend on methods that they do not
usé. "
(Robert C. Martin, Agile Software Development)

"Many client specific interfaces are better than one general-purpose
interrace. "
(Wikipedia)

Guideline: Make sure interfaces don't induce unnecessary dependencies.

## Dependency Inversion Principle
"The Dependency Inversion Principle (DIP) tells us that the most flexible
systems are those in wh ich source code dependencies refer only to
abstractions, not to concretions. "
(Robert C. Martin, Clean Architecture)

"a. High-level modules should not depend on low-level modules. Both
should depend on abstractions.
b. Abstractions should not depend on details. Details should depend on
abstractions. "
(Robert C. Martin, Agile Software Development)
