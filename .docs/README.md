# Refactorización a Clean Architecture

Este documento describe la transición de la arquitectura original acoplada del sistema hacia una estructura basada en los principios de **Clean Architecture**.

## 1. Problemas detectados

En la versión inicial del proyecto, se identificaron los siguientes problemas arquitectónicos:

- **Acoplamiento fuerte a Prisma:** Los servicios estaban atados directamente al ORM (Prisma), lo que dificultaba cambiar la base de datos o realizar pruebas unitarias (testing) sin depender de una base de datos real.
- **Lógica de negocio en Services (Fat Services):** Los archivos `Service` concentraban múltiples responsabilidades, mezclando reglas de negocio puro con infraestructura y flujos de red.
- **Dependencias cruzadas entre módulos:** Existía un alto riesgo de acoplamiento circular debido a que los servicios se llamaban entre sí sin interfaces claras.
- **Ausencia de capas definidas:** No existía una separación clara entre qué código pertenecía a la presentación, cuál al negocio y cuál a la infraestructura.

## 2. Solución aplicada

Para resolver los problemas mencionados, se reestructuró la aplicación en capas concéntricas, siguiendo la regla de dependencia de Clean Architecture (las dependencias siempre apuntan hacia adentro):

- **Domain (Dominio):** Contiene las entidades centrales y las interfaces de los repositorios. No depende de ninguna otra capa ni de librerías externas (como NestJS o Prisma).
- **Application (Casos de Uso):** Contiene la lógica y las reglas de negocio de la aplicación (`Use Cases`). Orquesta el flujo de datos utilizando las interfaces del dominio, ignorando cómo se implementan técnicamente.
- **Infrastructure (Infraestructura):** Implementa las interfaces definidas en el dominio. Aquí reside la conexión real a bases de datos (PrismaRepositories) y otros servicios externos.
- **Presentation (Controladores):** Recibe las peticiones HTTP (los `Controllers`), adapta los DTOs y llama a los Casos de Uso correspondientes.

Esta separación garantiza que nuestra lógica principal (Dominio y Aplicación) no necesite ser modificada si en el futuro cambiamos el ORM o el framework HTTP.

## 3. Diagrama

El siguiente flujo ilustra la nueva regla de comunicación (Inversión de Dependencias) aplicada en el código:

```text
Controller (Presentation)
    ↓
Use Case (Application)
    ↓
Repository Interface (Domain)
    ↓
Prisma Repository (Infrastructure)
    ↓
Database (Prisma)