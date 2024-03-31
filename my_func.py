#print(abs(-5))

#a = 'I"m string'
#print(dir(a))

#print(eval('3+3'))

#print(float('12'))

#print(int('12'))

#print(len('Please'))

#alist = ['dog', 'cat', 'horse', 'rabbit']
#print(len(alist))

#numbers = [34, 745, 32 ,3]
#print(max(numbers))

#for x in range(0, 10, 2):
    #print(x)

#alist = list(range(0 ,200 ,50))
#print(alist)

#print(sum(alist))

#def say_hello(what_is_your_name):
    #print('привіт,', what_is_your_name)
#say_hello('Eugene')

#def budjet(salary, savings, expencies):
    #return salary+savings-expencies
#print(budjet(10000, 2000, 5000))

#new_list = [1, 2, 3]
#print(sum(new_list))

#sum_1 = 0
#for num in new_list:
    #sum_1 += num
#print(sum_1)
print('Таблиця множення')

for x in range(1, 10):
    c = 3*x
    print('3x', x, '=', c)

print('Середнє арифметичне')
list = range(1, 101)
y = sum(list)/100
print(y)

print("Ділення")
def div_two(z):
    i =0
    if z < 50:
        print('Ви ввели занадто маленьке число')
    else:
        while z > 50:
           i = i+1
           z = z/2

        print('Результат ділення=', z, 'Кількість ітерацій=', i)

div_two(5000)