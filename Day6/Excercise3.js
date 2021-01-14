const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

let dupCountries = countries.sort()

let landCountries = []

for (const country of countries){
    if (country.includes("land")) {
        landCountries += country
    }
}

console.log(landCountries)
