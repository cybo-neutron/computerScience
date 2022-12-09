Suppose you want different types of enemies in your game with different attacking abilities.

For example.
1. Enemy shooting bullets
2. Enemy shooting laser beams
3. Enemy using sword to attack.

So lets say we have these 3 types of enemies. They all might be having some common features but their attacking strategy differ.

We can create a Attack Strategy interface and define the concrete attacking strategy for each of these enemies.

- Attack Stategy (`<interface>`) 
    - SwordAttack
    - Laser attack
    - BulletsFire



## OR

You want your player character to use different types of guns and weapons.  
In this condition too you can use the strategy pattern to switch between the attacking strategy during the gameplay(runtime).


## When to use Strategy pattern.
* You want to switch between different variants of an algorithms during runtime. ( for example: you want your player to switch between weapons and the attacking strategy)
* When you see a lot of similar classes that only differ in the way they execute some behavior.
* Use the pattern when your class has a massive conditional statement that switches between different variants of the same algorithm.