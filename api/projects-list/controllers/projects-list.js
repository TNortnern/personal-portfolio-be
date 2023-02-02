'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getProjects(ctx) {
        const [initial] = await strapi.query('projects-list').find({})
        for(const project of initial.projects) {
            const category = await strapi.query('project-categories').findOne({ id: initial.category })
            const technologies = await strapi.query('technology').find({ id_in: project.technologies })
            project.technologies = technologies
            project.category = category
        }
        return initial.projects
    }
};
