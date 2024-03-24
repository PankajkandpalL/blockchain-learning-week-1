#!/bin/bash

random_delay() {
    echo "$(shuf -i 1-2 -n 1)"
}

for file in exercise*.js; do
    echo "Running $file..."
    node "$file"
    echo "-------------------------------------"
    delay=$(random_delay)
    sleep "$delay"
done

  echo "Running bonusExercise.js..."
    node bonusExercise.js