--[ with LUA --]

local total
total = 0

for i=0,1000,1
do
    if( i % 3 == 0 or i % 5 ==0 )
    then
        total = total + i
    end
end

print( total )
