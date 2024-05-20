# Loncotes County Library
## Problem Solved
Librarians having difficulty keeping records straight with the high volume of patrons

This website aims to make it easy for librarians to:
- Quickly see their currently available inventory
- Add/Remove items from the inventory
- Determine which patrons have a checked out material, and see what that material is
- Handle returns and calculate late fees

## Database
[Loncotes Library Database GitHub Repository](https://github.com/ztrouy/loncotes-library)

## Technologies Used
- ReactJs
- JavaScript
- C#
- ASP.NET
- Bootstrap
- Reactstrap
- CSS3
- HTML5
- Vite

## Installation and Setup Instructions
Clone this repository, and the [Database](https://github.com/ztrouy/loncotes-library) repository. You will need [node](https://github.com/nodejs/node), [npm](https://github.com/npm/cli), [.Net 8.0.101 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0), and [PostgreSQL 16](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) installed globally on your machine. Then run the following command
```
dotnet tool install --global dotnet-ef --framework net8.0
```
#### Installation:
Navigate to the clonsed directory for this repository and run
```
npm install
```
#### Run Database:
Navigate to the cloned directory for the [database](https://github.com/ztrouy/loncotes-library) repository and run
```
dotnet restore
```
Then initialize user secrets with the following
```
dotnet user-secrets init
```
```
dotnet user-secrets set 'LoncotesLibraryDbConnectionString' 'Host=localhost;Port=5432;Username=postgres;Password=<your_postgresql_password>;Database=LoncotesLibrary'
```
Then setup the database with the following
```
dotnet ef database update
```
```
dotnet watch run --launch-profile https
```
#### Run Website:
Navigate to the cloned directory for this repository, and run 
```
npm run dev
```

## Essential Structure
Loncotes Library consists of several key features
- Browse Materials
- Create Materials
- Remove Material from Circulation
- Checkout a Material
- Return a Material
- Pay Late Fee
- View All Checkouts of a Material
- View All Checkouts of a Patron
- Deactivate and Reactivate a Patron
