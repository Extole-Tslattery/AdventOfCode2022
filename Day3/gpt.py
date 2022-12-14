# define the list of rucksacks
rucksacks = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
]

# define a function to get the priority of an item type
def get_priority(item_type):
    if item_type.islower():
        return ord(item_type) - ord('a') + 1
    elif item_type.isupper():
        return ord(item_type) - ord('A') + 27

# initialize the sum of priorities to 0
sum_of_priorities = 0

# go through each rucksack
for rucksack in rucksacks:
    # get the length of the rucksack
    rucksack_length = len(rucksack)
    
    # get the first half of the rucksack
    first_half = rucksack[:rucksack_length // 2]
    
    # get the second half of the rucksack
    second_half = rucksack[rucksack_length // 2:]
    
    # go through each item type in the first half of the rucksack
    for item_type in first_half:
        # if the item type appears in the second half of the rucksack, add its priority to the running total
        if item_type in second_half:
            sum_of_priorities += get_priority(item_type)
            
            # since we only care about the first item type that appears in both compartments, we can break out of the loop
            break

# print the sum of priorities
print(sum_of_priorities)
